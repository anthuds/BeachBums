package com.bb.BB.controller.dto;

import com.bb.BB.repository.entity.Item;
import jakarta.persistence.Entity;

@Entity
public class ItemDto extends Item {

    private String name;

    private String description;

    private String image;

    private Double price;

    public ItemDto(String name, String description, String image, Double price) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.price = price;
    }


    public ItemDto() {
    }

    @Override
    public String getName() {
        return name;
    }
    @Override
    public void setName(String name) {
        this.name = name;
    }
    @Override
    public String getDescription() {
        return description;
    }
    @Override
    public void setDescription(String description) {
        this.description = description;
    }
    @Override
    public String getImage() {
        return image;
    }
    @Override
    public void setImage(String image) {
        this.image = image;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}
