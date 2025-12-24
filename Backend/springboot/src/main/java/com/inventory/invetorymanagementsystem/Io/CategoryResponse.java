package com.inventory.invetorymanagementsystem.Io;


import lombok.Builder;
import lombok.Data;
import java.time.LocalDateTime;

@Builder
@Data
public class CategoryResponse {
    private Long categoryId;
    private String name;
    private String description;
    private String bgColor;
    private String imageUrl;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
