package usach.cl.gamat.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import usach.cl.gamat.entities.Company;
import usach.cl.gamat.facadeBD.IServiceBD;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/companies")
public class CompanyService {
    @Autowired
    private IServiceBD serviceBD;

    @GetMapping("/")
    @ResponseBody
    public List<Company> getAll(){return serviceBD.findAllCompany();}

}
