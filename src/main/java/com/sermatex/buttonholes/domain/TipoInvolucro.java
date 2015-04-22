package com.sermatex.buttonholes.domain;

public class TipoInvolucro {

	private int id;
	
	private String description;

	public TipoInvolucro() {}
	
	public TipoInvolucro(int id, String description) {
		super();
		this.id = id;
		this.description = description;
	}

	public int getId() {
		return id;
	}

	public String getDescription() {
		return description;
	}
}
