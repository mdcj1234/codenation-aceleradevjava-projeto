package com.codenation.projeto.repository.projection;

import com.codenation.projeto.model.Level;
import java.time.LocalDate;

public class SimpleLog {

    private Long id;
    private Level level;
    private String description;
    private String origin;
    private Integer quantity;
    private LocalDate createdAt;

    public SimpleLog(Long id, Level level, String description, String origin, Integer quantity, LocalDate createdAt) {
        this.id = id;
        this.level = level;
        this.description = description;
        this.origin = origin;
        this.quantity = quantity;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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

    public LocalDate getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDate createdAt) {
        this.createdAt = createdAt;
    }

}
