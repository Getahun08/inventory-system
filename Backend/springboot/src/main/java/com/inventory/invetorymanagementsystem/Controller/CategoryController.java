package com.inventory.invetorymanagementsystem.Controller;

import com.inventory.invetorymanagementsystem.Io.CategoryRequest;
import com.inventory.invetorymanagementsystem.Io.CategoryResponse;
import com.inventory.invetorymanagementsystem.Service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RequiredArgsConstructor
@RestController
@CrossOrigin("*")
@RequestMapping("/categories")
public class CategoryController {
    private final CategoryService CategoryService;



    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CategoryResponse addCategory(@RequestBody CategoryRequest request)
    {
      return CategoryService.add(request);
    }
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<CategoryResponse> fetchCategories(){
        return CategoryService.read();
    }
    @PutMapping("/{categoryId}")
    @ResponseStatus(HttpStatus.OK)
    public void update(@PathVariable long categoryId , @RequestBody CategoryRequest request){
        try {
            CategoryService.update(categoryId,request );
        }catch (Exception e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,e.getMessage());
        }
    }
    @DeleteMapping("/{categoryId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void remove(@PathVariable long categoryId){
        try {
            CategoryService.delete(categoryId);
        }catch (Exception e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,e.getMessage());
        }
    }
}
