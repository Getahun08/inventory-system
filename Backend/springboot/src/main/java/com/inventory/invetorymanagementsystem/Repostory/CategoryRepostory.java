package com.inventory.invetorymanagementsystem.Repostory;

import com.inventory.invetorymanagementsystem.Entity.CategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CategoryRepostory extends JpaRepository <CategoryEntity, Long> {

}
