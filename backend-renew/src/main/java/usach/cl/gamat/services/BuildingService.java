package usach.cl.gamat.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import usach.cl.gamat.entities.Approver;
import usach.cl.gamat.entities.Building;
import usach.cl.gamat.entities.Request;
import usach.cl.gamat.facadeBD.IServiceBD;

import java.util.List;
import java.util.Set;

@CrossOrigin
@RestController
@RequestMapping("/buildings")
public class BuildingService {

    @Autowired

    private IServiceBD serviceBd;

    @GetMapping
    @ResponseBody
    public List<Building> getAll(){
        return serviceBd.getAllBuilding();
    }
    // esto es para obtener las request de una determina obra, por parte de un aprobador
    @GetMapping("/requests/{id}")
    @ResponseBody
    public List<Request> getAllRequest(@PathVariable("id") Integer idBuilding){
        return serviceBd.getRequestOfBuilding(idBuilding);
    }

    @GetMapping("/{idAprobador}/approver")
    public Set<Building> getBuildingUserAprobador(@PathVariable("idAprobador") Integer id){
        Approver user= serviceBd.getApproverById(id);
        System.out.println(user.getBuildings());
        if(user != null) {
            return  user.getBuildings();
        }
        return null;
    }

    @PostMapping
    @ResponseBody
    public Building createBuilding(@RequestBody Building building) {
        if(building !=null)
            return serviceBd.saveBuilding(building);
        return null;
    }

    @PutMapping
    @ResponseBody
    public Building updateBuilding(@RequestBody Building building) {
        if(building != null)
            return serviceBd.updateBuilding(building);
        return null;
    }

    @DeleteMapping("/{id}")
    @ResponseBody
    public HttpStatus deleteBuilding(@PathVariable("id") Integer idBuilding) {
        if(serviceBd.deleteBuilding(idBuilding))
            return HttpStatus.OK;
        return HttpStatus.INTERNAL_SERVER_ERROR;
    }


}