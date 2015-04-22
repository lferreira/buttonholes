package com.sermatex.buttonholes.resources;

import java.util.Arrays;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import org.springframework.stereotype.Component;

import com.sermatex.buttonholes.domain.ISRR;
import com.sermatex.buttonholes.domain.TipoInvolucro;

@Component
@Path("/tipo-involucros")
public class TipoInvolucrosResource {

	@GET
	@Produces("application/json")
	public List<TipoInvolucro> listAll() {
		return Arrays.asList(new TipoInvolucro(1, "Comum Tampa Baixa"));
	}
	
	@POST
	@Produces("application/json")
	public Response add(ISRR isrr) {
		return Response.status(Response.Status.CREATED).build();
	}
}
