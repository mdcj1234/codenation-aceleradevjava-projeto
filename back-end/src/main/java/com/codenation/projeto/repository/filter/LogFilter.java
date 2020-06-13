package com.codenation.projeto.repository.filter;

import com.codenation.projeto.model.Level;

public class LogFilter {

    private Long id;

    private Level level;

    private String description;

    private String origin;

    private Integer quantity;

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public Level getLevel() {
        return level;
    }

    public void setLevel(Level level) {
        this.level = level;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

}
