package com.inventory.invetorymanagementsystem.Service.Implimatation;

import com.inventory.invetorymanagementsystem.Entity.CategoryEntity;
import com.inventory.invetorymanagementsystem.Io.CategoryRequest;
import com.inventory.invetorymanagementsystem.Io.CategoryResponse;
import com.inventory.invetorymanagementsystem.Repostory.CategoryRepostory;
import com.inventory.invetorymanagementsystem.Service.CategoryService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor

public class categoryServieImplimantation implements CategoryService {
    private final CategoryRepostory CategoryRepostory;


    @Override
    @Transactional
    public CategoryResponse updateImageUrl(Long categoryId, String publicUrl) {
        CategoryEntity category = CategoryRepostory.findById(categoryId)
                .orElseThrow(() -> new RuntimeException("Category not found"));

        category.setImageUrl(publicUrl);
        CategoryEntity saved = CategoryRepostory.save(category);

        return convertToResponse(saved);
    }

    @Override
    public CategoryResponse add(CategoryRequest request) {
        CategoryEntity newCategoryEntity=ConvertToEntity(request);
        newCategoryEntity=CategoryRepostory.save(newCategoryEntity);
        return convertToResponse(newCategoryEntity);
    }

    @Override
    public List<CategoryResponse> read() {
        return CategoryRepostory.findAll()
                .stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public void delete(long categoryId) {
        CategoryEntity existingCategory=CategoryRepostory.findById(categoryId)
                .orElseThrow(()-> new RuntimeException("category is not found"));
        CategoryRepostory.delete(existingCategory);
    }

    @Override
    public void update(long categoryId, CategoryRequest request) {
        CategoryEntity existingCategory = CategoryRepostory.findById(categoryId)
                .orElseThrow(() -> new RuntimeException("Category not found"));

        existingCategory.setName(request.getName());
        existingCategory.setDescription(request.getDescription());
        existingCategory.setBgColor(request.getBgColor());

        CategoryEntity updatedCategory = CategoryRepostory.save(existingCategory);

        convertToResponse(updatedCategory);
    }


    private CategoryResponse convertToResponse(CategoryEntity newCategoryEntity) {
        return CategoryResponse.builder()
                .categoryId(newCategoryEntity.getCategoryId())
                .name(newCategoryEntity.getName())
                .bgColor(newCategoryEntity.getBgColor())
                .imageUrl(newCategoryEntity.getImageUrl())
                .createdAt(newCategoryEntity.getCreatedAt())
                .updatedAt(newCategoryEntity.getUpdatedAt())
                .build();
    }

    private CategoryEntity ConvertToEntity(CategoryRequest request) {
        return CategoryEntity.builder()
                .name(request.getName())
                .description(request.getDescription())
                .bgColor(request.getBgColor())
                .build();

    }
}
