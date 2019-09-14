package pl.hackyeah2019.hackyeah.product;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.Duration;

@Data
@Entity
public class PackageMaterial {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String code;
    private String logo;
    private String recyclePotential;
    private Boolean reusable;
    private Integer timeToBiodegradateInDays;
}
