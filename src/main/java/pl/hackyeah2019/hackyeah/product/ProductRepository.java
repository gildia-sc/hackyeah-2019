package pl.hackyeah2019.hackyeah.product;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;
import java.util.Optional;

@RepositoryRestResource(collectionResourceRel = "products", path = "products")
public interface ProductRepository extends PagingAndSortingRepository<Product, Long> {

    Optional<Product> findProductByEan(String ean);

    List<Product> findProductsByCompanyId(Long id);
}
