package entity;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Person实体类，作为后端传出的数据
 * @author dong
 * @date Aug 21, 2019 8:01:20 PM
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Person {
    private String name;
    private String pwd;
    private Date birthday;

}
