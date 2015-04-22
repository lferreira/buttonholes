package com.sermatex.buttonholes;

import javax.ws.rs.ApplicationPath;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.context.annotation.Configuration;

import com.sermatex.buttonholes.resources.TipoInvolucrosResource;

@Configuration
@ApplicationPath("/api")
public class JerseyConfig extends ResourceConfig  {
	
	public JerseyConfig() {
		register(TipoInvolucrosResource.class);
	}
	
}
