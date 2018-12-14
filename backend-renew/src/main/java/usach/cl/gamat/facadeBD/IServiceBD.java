package usach.cl.gamat.facadeBD;

import usach.cl.gamat.entities.*;

import java.util.List;
import java.util.Set;

//interfaz que usa patron facade para manejar acceso a repositorios BD
public interface IServiceBD {

    //operaciones request
    public List<Request> findRequestByState(String state, Integer idAprobador, Integer idBuilding);



    public List<Request> findAllRequest();

    public Request saveRequest(Request request);

    public Request updateRequest(Request newRequest);

    public boolean deleteRequest (Integer idRequest);

    public Request getRequestById(Integer id);

    //budget

    /*public Iterable<Budget> findAllBudget();

    public Budget findBudgetById(Integer id);

    public Budget saveBudget(Budget budget);

    public boolean deleteBudget (Integer id);*/

    //operaciones Building
    public Building getBuildingById(Integer idBuilding);

    public List<Building> getAllBuilding();

    public List<Request> getRequestOfBuilding(Integer id);

    public Building saveBuilding(Building building);

    public Building updateBuilding(Building building);

    public boolean deleteBuilding(Integer idBuilding);


    //operaciones items
    public List<Item> findAllItem();

    public Item saveItem(Item item);

    public Item updateItem(Item item);

    public boolean deleteItem(Integer iDitem);

    // operaciones bistributor

    public Set<Distributor> getDistributor();

    public Distributor createDistributor(Distributor distributor);

    public Distributor updateDistributor(Distributor distributor);

    public boolean deleteDistributor(Integer idDistributor);

    /*// operaciones itemState

    public List<ItemState>getItemStates();

    public ItemState createItemState(ItemState itemState);

    public ItemState updateItemState(ItemState itemState);

    public boolean deleteItemState(Integer idItemState);*/


    // operaciones User

    public User getUserById(Integer idUser);

    public List<User> findAllUsers();

    // operaciones Driver

    public Driver getDriverById(Integer idUser);

    public List<Driver> getAllDriver();

    // operaciones Manager

    public Manager getManagerById(Integer idUser);

    // operaciones Approver

    public Approver getApproverById(Integer idUser);

    //Operaciones Buyer

    public Buyer getBuyerById(Integer idUser);



    // operaciones budgetState

    //public BudgetState getBudgetStateById(Integer idBudgetState);

    //Operaciones Company

    public List<Company> findAllCompany();

    public Company findCompanyById(Integer id);



}