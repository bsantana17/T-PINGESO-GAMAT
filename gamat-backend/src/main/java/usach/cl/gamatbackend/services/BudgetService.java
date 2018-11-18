package usach.cl.gamatbackend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import usach.cl.gamatbackend.entities.Budget;
import usach.cl.gamatbackend.entities.Item;
import usach.cl.gamatbackend.entities.Request;
import usach.cl.gamatbackend.entities.User;
import usach.cl.gamatbackend.facadeBd.IServiceBd;
import usach.cl.gamatbackend.repositories.BudgetRepository;
import usach.cl.gamatbackend.repositories.ItemRepository;
import usach.cl.gamatbackend.repositories.UserRepository;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/budgets")
public class BudgetService {

    @Autowired
    private BudgetRepository repository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ItemRepository itemRepository;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    @ResponseBody
    public Iterable<Budget> getAllBudgets(){
        return repository.findAll();
    }

    //Comprador ve las cotizaciones aprobadas
    @RequestMapping(value = "/approved", method = RequestMethod.GET)
    @ResponseBody
    public List<Budget> getApprovedBudgets(){
        Iterable<Budget> budgets = repository.findAll();
        List<Budget> approved = new ArrayList<Budget>();
        for (Budget budget: budgets) {
            if(budget.getBudgetState().getIdBudgetState() == 1){
                approved.add(budget);
            }
        }
        return approved;
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public Budget createRequest(@RequestBody Budget resource) {
        if(resource != null) {
            return repository.save(resource);
        }
        return null;

    }


    @RequestMapping(value = "/driver/{id}", method = RequestMethod.PUT)
    @ResponseBody
    public void sendBudget(@PathVariable("id") Integer id, @RequestBody Budget budget){
        Request request = budget.getRequest();
        List<Item> items = request.getItems();
        for(Item item:items){
            item.setDriver(userRepository.findById(id).get());
            itemRepository.save(item);
        }
    }
}
