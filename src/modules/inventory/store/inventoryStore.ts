import {defineStore} from 'pinia'
import {ref, watch} from 'vue'
import inventoryData from '../data/inventory.json'
import type {IInventory} from '../types/inventoryTypes.ts'

export const useInventoryStore = defineStore("inventory", () => {
  const board = ref<IInventory[]>([]);
  
  function initBoard() {
    const savedBoard = loadBoard()
    
    if (savedBoard) {
      board.value = savedBoard;
    } else {
      board.value = Array.from({ length: 25 }, () => ({
        id: null,
        image: null,
        quantity: 0
      }))
      
      inventoryData.forEach((item, index) => {
        if (index < board.value.length) {
          board.value[index] = {
            id: item.id,
            image: item.image,
            quantity: item.quantity
          }
        }
      })
    }
  }
  
  function saveBoard() {
    localStorage.setItem("inventory", JSON.stringify(board.value))
  }
  
  function loadBoard(): IInventory[] | null {
    const data = localStorage.getItem("inventory")
    return data ? JSON.parse(data) : null
  }
  
  function moveItem(fromIndex: number, toIndex: number) {
    if (fromIndex !== toIndex && board.value[fromIndex] && board.value[toIndex]) {
      const temp = board.value[toIndex]
      board.value[toIndex] = board.value[fromIndex]
      board.value[fromIndex] = temp
      saveBoard()
    }
  }
  
  function getItemById(id: number): IInventory | null {
    return board.value.find((item) => item.id === id) || null
  }
  
  function removeItem(id: number, quantity: number) {
    const itemIndex = board.value.findIndex(item => item.id === id)
    if (itemIndex !== -1) {
      const item = board.value[itemIndex]
      
      if (item.quantity > quantity) {
        item.quantity -= quantity
      } else {
        board.value.splice(itemIndex, 1)
      }
      
      saveBoard()
    }
  }
  
  watch(board, saveBoard, { deep: true })
  
  return { board, initBoard, moveItem, getItemById, removeItem }
})
