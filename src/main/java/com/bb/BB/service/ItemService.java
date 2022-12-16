package com.bb.BB.service;

import com.bb.BB.repository.ItemRepository;
import com.bb.BB.repository.entity.Item;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class ItemService {
    private final ItemRepository itemRepository;

    public ItemService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public List<Item> getItem() {
        return itemRepository.findAll();
    }

    public Optional<Item> findById(int id) {
        return itemRepository.findById(id);
    }

    public Item addNewItem(Item item) {
        return itemRepository.save(item);
    }

    public void delete(Integer id) {
        itemRepository.deleteById(id);
    }


}