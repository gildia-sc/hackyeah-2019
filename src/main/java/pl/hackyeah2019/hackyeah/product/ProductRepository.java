package pl.hackyeah2019.hackyeah.product;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;
import java.util.Optional;

@RepositoryRestResource(collectionResourceRel = "products", path = "products")
public interface ProductRepository extends PagingAndSortingRepository<Product, Long> {

    Optional<Product> findProductByEan(@Param("ean") String ean);

    List<Product> findProductsByCompanyId(@Param("id") Long id);

    Optional<Product> findTopByCategoryNameAndScoreGreaterThanOrderByScoreDesc(@Param("categoryName") String categoryName,
                                                                           @Param("score") Double score);

    @Projection(name = "ProductProjection", types = {Product.class})
    public interface ProductProjection {

        Category getCategory();

        String getEan();

        String getName();

        Company getCompany();

        String getImage();

        String getProductType();

        Integer getProductWeight();

        Integer getPackageWeight();

        PackageMaterial getPackageMaterial();

        String getProductDurability();

        Double getLatitude();

        Double getLongitude();

        Double getLca();

        Double getScore();
    }
}
