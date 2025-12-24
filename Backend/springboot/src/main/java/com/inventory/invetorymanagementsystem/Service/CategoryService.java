package com.inventory.invetorymanagementsystem.Service;

import com.inventory.invetorymanagementsystem.Io.CategoryRequest;
import com.inventory.invetorymanagementsystem.Io.CategoryResponse;

import java.util.List;

public interface CategoryService {
    CategoryResponse add(CategoryRequest request);
    List<CategoryResponse> read();
    void delete(long categoryId);
    void update(long categoryId, CategoryRequest request);

    CategoryResponse updateImageUrl(Long categoryId, String publicUrl);
}
