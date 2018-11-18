package usach.cl.gamatbackend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import usach.cl.gamatbackend.entities.Budget;
import usach.cl.gamatbackend.facadeBd.IServiceBd;
import usach.cl.gamatbackend.repositories.BudgetRepository;

@CrossOrigin
@RestController
@RequestMapping("/budgets")
public class BudgetService {

    @Autowired
    private BudgetRepository repository;

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public Budget createRequest(@RequestBody Budget resource) {
        return repository.save(resource);

    }
}
