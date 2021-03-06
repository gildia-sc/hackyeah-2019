package pl.hackyeah2019.hackyeah.product;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class EcoLabel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    @Column(length = 10000)
    private String description;
    private String logo;
}
