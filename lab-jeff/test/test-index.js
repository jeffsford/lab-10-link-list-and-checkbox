'use strict';

const expect = require('expect');
let SLL = require('../index.js');

describe('Singly Linked List', () => {
  describe('SLL Constructor', () => {
    it('Should create a single node', () => {
      let node = new SLL(5);
      expect(node.value).toEqual(5);
      expect(node.next).toEqual(null);
    });
  });
  describe('Append Node', () => {
    it('Should add a node to a list', () => {
      let node = new SLL(5);
      let node2 = new SLL(10);
      node.appendNode(node2);
      expect(node.value).toEqual(5);
      expect(node.next.value).toEqual(10);
      expect(node.next.next).toEqual(null);
    });
    it('Should not append a non-node', () => {
      let node = new SLL(5);
      node.appendNode('dasdsad');
      expect(node.value).toEqual(5);
      expect(node.next).toEqual(null);
    });
    it('Should not append nothing', () => {
      let node = new SLL(5);
      node.appendNode();
      expect(node.value).toEqual(5);
      expect(node.next).toEqual(null);
    });
  });
  describe('Remove Node', () => {
    it('Should remove a node', () => {
      let node = new SLL(5);
      let node2 = new SLL(10);
      node.appendNode(node2);
      let node3 = new SLL(15);
      node.appendNode(node3);
      node.removeNode(node2);
      expect(node.value).toEqual(5);
      expect(node.next.value).toEqual(15);
      expect(node.next.next).toEqual(null);
    });
    it('Should not remove a non-node', () => {
      let node = new SLL(5);
      let node2 = new SLL(10);
      node.appendNode(node2);
      let node3 = new SLL(15);
      node.appendNode(node3);
      node.removeNode('asdsadsdasd');
      expect(node.value).toEqual(5);
      expect(node.next.value).toEqual(10);
      expect(node.next.next.value).toEqual(15);
      expect(node.next.next.next).toEqual(null);
    });
    it('Should not remove a node that isnt in the list', () => {
      let node = new SLL(5);
      let node2 = new SLL(10);
      node.appendNode(node2);
      let node3 = new SLL(15);
      node.appendNode(node3);
      let nopeNode = new SLL(25);
      node.removeNode(nopeNode);
      expect(node.value).toEqual(5);
      expect(node.next.value).toEqual(10);
      expect(node.next.next.value).toEqual(15);
      expect(node.next.next.next).toEqual(null);
    });
  });
  describe('Reverse List', () => {
    it('Should reverse the list', () => {
      let node = new SLL(5);
      let node2 = new SLL(10);
      node.appendNode(node2);
      let node3 = new SLL(15);
      node.appendNode(node3);
      let revList = node.reverseList();
      expect(revList.value).toEqual(15);
      expect(revList.next.value).toEqual(10);
      expect(revList.next.next.value).toEqual(5);
      expect(revList.next.next.next).toEqual(null);
    });
    it('Should reverse the larger list', () => {
      let node = new SLL(5);
      let node2 = new SLL(10);
      node.appendNode(node2);
      let node3 = new SLL(15);
      node.appendNode(node3);
      let node4 = new SLL(20);
      node.appendNode(node4);
      let node5 = new SLL(25);
      node.appendNode(node5);
      let revList = node.reverseList();
      expect(revList.value).toEqual(25);
      expect(revList.next.value).toEqual(20);
      expect(revList.next.next.value).toEqual(15);
      expect(revList.next.next.next.value).toEqual(10);
      expect(revList.next.next.next.next.value).toEqual(5);
      expect(revList.next.next.next.next.next).toEqual(null);
    });
    it('Should reverse the same length 1 list', () => {
      let node = new SLL(5);
      let revList = node.reverseList();
      expect(revList.value).toEqual(5);
      expect(revList.next).toEqual(null);
    });
  });
});
