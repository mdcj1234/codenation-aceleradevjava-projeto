package com.codenation.projeto.repository.filter;

import com.codenation.projeto.model.Level;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

public class LogFilter {

    private Long id;

    private Level level;

    private String description;

    private String origin;

    private Integer quantity;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate createdAtInit;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate createdAtEnd;

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

    public LocalDate getCreatedAtInit() { return createdAtInit; }

    public void setCreatedAtInit(LocalDate createdAtInit) { this.createdAtInit = createdAtInit; }

    public LocalDate getCreatedAtEnd() { return createdAtEnd; }

    public void setCreatedAtEnd(LocalDate createdAtEnd) { this.createdAtEnd = createdAtEnd; }

}
