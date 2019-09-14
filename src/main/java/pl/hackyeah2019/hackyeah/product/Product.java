package pl.hackyeah2019.hackyeah.product;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Data
@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String ean;

    @ManyToOne(fetch = FetchType.EAGER)
    private Company company;

    @ManyToOne
    private Category category;

    @ManyToMany
    private Set<EcoLabel> ecoLabel;

    private String image;

    private String productType;

    private Integer productWeight;

    private Integer packageWeight;

    @ManyToOne
    private PackageMaterial packageMaterial;

    private String productDurability;

    private Double latitude;

    private Double longitude;

    private Double lca;

}
