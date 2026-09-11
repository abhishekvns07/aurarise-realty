package com.aurarise.realty.model;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "properties")
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(unique = true)
    private String slug;

    private String location;
    private String city;
    private String tag;
    private String image;

    @ElementCollection
    @CollectionTable(name = "property_gallery", joinColumns = @JoinColumn(name = "property_id"))
    @Column(name = "image_url")
    private List<String> gallery = new ArrayList<>();

    private String highlight;

    @Column(length = 2500)
    private String description;

    @ElementCollection
    @CollectionTable(name = "property_features", joinColumns = @JoinColumn(name = "property_id"))
    @Column(name = "feature", length = 500)
    private List<String> features = new ArrayList<>();

    private String price;
    private String rate;
    private String unitTypes;
    private String projectArea;
    private String totalUnits;
    private String possession;
    private String status;

    @ElementCollection
    @CollectionTable(name = "property_amenities", joinColumns = @JoinColumn(name = "property_id"))
    @Column(name = "amenity")
    private List<String> amenities = new ArrayList<>();

    public Property() {}

    public Property(Long id, String title, String slug, String location, String city, String tag, String image,
                    List<String> gallery, String highlight, String description, List<String> features,
                    String price, String rate, String unitTypes, String projectArea, String totalUnits,
                    String possession, String status, List<String> amenities) {
        this.id = id;
        this.title = title;
        this.slug = slug;
        this.location = location;
        this.city = city;
        this.tag = tag;
        this.image = image;
        this.gallery = gallery != null ? gallery : new ArrayList<>();
        this.highlight = highlight;
        this.description = description;
        this.features = features != null ? features : new ArrayList<>();
        this.price = price;
        this.rate = rate;
        this.unitTypes = unitTypes;
        this.projectArea = projectArea;
        this.totalUnits = totalUnits;
        this.possession = possession;
        this.status = status;
        this.amenities = amenities != null ? amenities : new ArrayList<>();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public List<String> getGallery() {
        return gallery;
    }

    public void setGallery(List<String> gallery) {
        this.gallery = gallery;
    }

    public String getHighlight() {
        return highlight;
    }

    public void setHighlight(String highlight) {
        this.highlight = highlight;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<String> getFeatures() {
        return features;
    }

    public void setFeatures(List<String> features) {
        this.features = features;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getRate() {
        return rate;
    }

    public void setRate(String rate) {
        this.rate = rate;
    }

    public String getUnitTypes() {
        return unitTypes;
    }

    public void setUnitTypes(String unitTypes) {
        this.unitTypes = unitTypes;
    }

    public String getProjectArea() {
        return projectArea;
    }

    public void setProjectArea(String projectArea) {
        this.projectArea = projectArea;
    }

    public String getTotalUnits() {
        return totalUnits;
    }

    public void setTotalUnits(String totalUnits) {
        this.totalUnits = totalUnits;
    }

    public String getPossession() {
        return possession;
    }

    public void setPossession(String possession) {
        this.possession = possession;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public List<String> getAmenities() {
        return amenities;
    }

    public void setAmenities(List<String> amenities) {
        this.amenities = amenities;
    }
}
