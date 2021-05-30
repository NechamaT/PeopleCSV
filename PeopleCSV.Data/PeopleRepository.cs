using CsvHelper;
using FizzWare.NBuilder;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;

namespace PeopleCSV.Data
{
    public class PeopleRepository
    {
        private readonly string _connectionString;
        public PeopleRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public string GeneratePeopleList(int x)
        {
            var ppl = new List<Person>();
            for (int y = 1; y <= x; y++)
            {
                var person = new Person
                {
                    Id = 0,
                    FirstName = Faker.NameFaker.FirstName(),
                    LastName = Faker.NameFaker.LastName(),
                    Age = Faker.NumberFaker.Number(1, 120),
                    Address = $"{Faker.LocationFaker.StreetNumber()}  {Faker.LocationFaker.StreetName()} {Faker.LocationFaker.City()}",
                    Email = Faker.InternetFaker.Email()
                };

                ppl.Add(person);
            }

            var ppl2 = Builder<Person>.CreateListOfSize(x)
            .Build();
            return GetCsv(ppl);
        }

        public void AddPpl(byte[] bytes)
        {
            var people = CsvParser(bytes);
            using var ctx = new PeopleDbContext(_connectionString);
            ctx.People.AddRange(people);
            ctx.SaveChanges();
        }

        public List<Person> GetPeople()
        {
            using var ctx = new PeopleDbContext(_connectionString);
            return ctx.People.ToList();
        }


        public void DeleteAll()
        {
            using var ctx = new PeopleDbContext(_connectionString);
            ctx.RemoveRange(ctx.People);
            ctx.SaveChanges();
        }

        private List<Person> CsvParser(byte[] bytes)
        {
            using var memoryStream = new MemoryStream(bytes);
            using var reader = new StreamReader(memoryStream);
            using var csv = new CsvReader(reader, CultureInfo.InvariantCulture);
            var ppl = csv.GetRecords<Person>().ToList();
            return ppl;
                
        }

        private string GetCsv(List<Person> people)
        {
            var builder = new StringBuilder();
            var stringWriter = new StringWriter(builder);

            using var csv = new CsvWriter(stringWriter, CultureInfo.InvariantCulture);
            csv.WriteRecords(people);

            return builder.ToString();
        }

        


    }
}

