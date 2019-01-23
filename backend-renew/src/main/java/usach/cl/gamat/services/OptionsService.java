
	package usach.cl.gamat.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import usach.cl.gamat.entities.Log;
import usach.cl.gamat.entities.Options;
import usach.cl.gamat.facadeBD.ServiceBdImp;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/options")
public class OptionsService {
@Autowired
private ServiceBdImp serviceBdImp;

@GetMapping("")
@ResponseBody
public List<Options> getOptions(){return serviceBdImp.getoptions();}

@PostMapping("")
public Options update(@RequestBody Options option) {
	option.setIdOption(1);
	return serviceBdImp.updateOptions(option);
	
}

}