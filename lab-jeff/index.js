'use strict';

module.exports = class SLL {
  constructor(val) {
    this.value = val;
    this.next = null;
  }

  // n === SLL length
  // Big O: O(n)
  appendNode(node) {
    if(!(node instanceof SLL))
      return null;
    if(!this.next) {
      this.next = node;
      return;
    }
    this.next.appendNode(node);
  }

  // n === SLL length
  // Big O: O(n)
  removeNode(node) {
    if(!(node instanceof SLL))
      return null;
    let prev = this;
    let current = prev.next;
    while(prev) {
      if(current === node) {
        prev.next = current.next;
        return;
      }
      prev = current;
      if(current.next)
        current = current.next;
      else
        return;
    }
  }

  // n === SLL length
  // Big O: O(n)
  reverseList() {
    let latestNode;
    let newList;
    let current = this;
    while(current) {
      latestNode = new SLL(current.value);
      current = current.next;
      latestNode.appendNode(newList);
      newList = latestNode;
    }
    return newList;
  }


  forEach(callback) {
    let current = this;
    while(current) {
      callback(current, this);
      current = current.next;
    }
  }
};
