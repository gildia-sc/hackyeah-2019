package pl.hackyeah2019.hackyeah;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import pl.hackyeah2019.hackyeah.product.Category;
import pl.hackyeah2019.hackyeah.product.CategoryRepository;
import pl.hackyeah2019.hackyeah.product.Company;
import pl.hackyeah2019.hackyeah.product.CompanyRepository;
import pl.hackyeah2019.hackyeah.product.EcoLabel;
import pl.hackyeah2019.hackyeah.product.EcoLabelRepository;
import pl.hackyeah2019.hackyeah.product.PackageMaterialRepository;
import pl.hackyeah2019.hackyeah.product.Product;
import pl.hackyeah2019.hackyeah.product.ProductRepository;

import javax.transaction.Transactional;

@Transactional
@SpringBootApplication
public class HackyeahApplication {

    public static void main(String[] args) {
        SpringApplication.run(HackyeahApplication.class, args);
    }

    @Bean
    public CommandLineRunner loadData(ProductRepository repository,
                                      CategoryRepository categoryRepository,
                                      CompanyRepository companyRepository,
                                      EcoLabelRepository ecoLabelRepository) {
        return (args) -> {
            var company = new Company();
            company.setLogo("foo.bar");
            company.setName("ACME Inc.");
            company.setRating(10);
            companyRepository.save(company);

            var category = new Category();
            category.setDescription("Foo bar baz");
            category.setName("Foo");
            categoryRepository.save(category);

            var ecoLabel = new EcoLabel();
            ecoLabel.setName("Foo");
            ecoLabel.setDescription("Foo bar baz");
            ecoLabelRepository.save(ecoLabel);

            var product = new Product();
            product.setName("test product");
            product.setCompany(company);
            product.setCategory(category);
            product.setEcoLabel(ecoLabel);
            product.setEan("123456");

            repository.save(product);
        };
    }

}
