package com.aurarise.realty.controller;

import com.aurarise.realty.model.Property;
import com.aurarise.realty.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/properties")
public class PropertyController {

    private final PropertyService propertyService;

    @Autowired
    public PropertyController(PropertyService propertyService) {
        this.propertyService = propertyService;
    }

    @GetMapping
    public ResponseEntity<List<Property>> getAllProperties() {
        return ResponseEntity.ok(propertyService.getAllProperties());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Property> getPropertyById(@PathVariable Long id) {
        return propertyService.getPropertyById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/slug/{slug}")
    public ResponseEntity<Property> getPropertyBySlug(@PathVariable String slug) {
        return propertyService.getPropertyBySlug(slug)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Property> createProperty(@RequestBody Property property) {
        Property created = propertyService.saveProperty(property);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Property> updateProperty(@PathVariable Long id, @RequestBody Property propertyDetails) {
        return propertyService.getPropertyById(id)
                .map(existingProperty -> {
                    existingProperty.setTitle(propertyDetails.getTitle());
                    existingProperty.setSlug(propertyDetails.getSlug());
                    existingProperty.setLocation(propertyDetails.getLocation());
                    existingProperty.setCity(propertyDetails.getCity());
                    existingProperty.setTag(propertyDetails.getTag());
                    existingProperty.setImage(propertyDetails.getImage());
                    existingProperty.setGallery(propertyDetails.getGallery());
                    existingProperty.setHighlight(propertyDetails.getHighlight());
                    existingProperty.setDescription(propertyDetails.getDescription());
                    existingProperty.setFeatures(propertyDetails.getFeatures());
                    existingProperty.setPrice(propertyDetails.getPrice());
                    existingProperty.setRate(propertyDetails.getRate());
                    existingProperty.setUnitTypes(propertyDetails.getUnitTypes());
                    existingProperty.setProjectArea(propertyDetails.getProjectArea());
                    existingProperty.setTotalUnits(propertyDetails.getTotalUnits());
                    existingProperty.setPossession(propertyDetails.getPossession());
                    existingProperty.setStatus(propertyDetails.getStatus());
                    existingProperty.setAmenities(propertyDetails.getAmenities());
                    Property updated = propertyService.saveProperty(existingProperty);
                    return ResponseEntity.ok(updated);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProperty(@PathVariable Long id) {
        if (propertyService.getPropertyById(id).isPresent()) {
            propertyService.deleteProperty(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
