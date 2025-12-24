package com.inventory.invetorymanagementsystem.Controller;

import com.inventory.invetorymanagementsystem.Io.CategoryResponse;
import com.inventory.invetorymanagementsystem.Service.CategoryService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;

@RequiredArgsConstructor
@RestController
@CrossOrigin("*")
@RequestMapping("/categories")
public class CategoryImageController {

    private final CategoryService categoryService;

    // Point to classpath static/images directory
    private final Path imageRoot = Paths.get("src/main/resources/static/images");

    @Operation(summary = "Upload category image")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Image uploaded successfully")
    })
    @PostMapping(value = "/{categoryId}/image", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public CategoryResponse uploadImage(
            @PathVariable Long categoryId,
            @Parameter(description = "Image file", required = true)
            @RequestParam("file") MultipartFile file) throws IOException {

        if (file.isEmpty()) {
            throw new IllegalArgumentException("File is empty");
        }

        // Ensure directory exists
        Files.createDirectories(imageRoot);

        // Sanitize filename
        String original = file.getOriginalFilename();
        String filename = System.currentTimeMillis() + "_" +
                (original != null ? original.replaceAll("\\s+", "_") : "image");

        Path target = imageRoot.resolve(filename);
        Files.copy(file.getInputStream(), target, StandardCopyOption.REPLACE_EXISTING);

        // Public URL (Spring Boot serves /static/** automatically)
        String publicUrl = "http://localhost:8082/images/" + filename;
        return categoryService.updateImageUrl(categoryId, publicUrl);

        // Update category.imageUrl in DB
    }
}
