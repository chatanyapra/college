class Node {
    int data;
    Node next;

    public Node(int data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListStack {
    public Node top;

    public LinkedListStack() {
        top.next = null;
    }

    public void push(int x) {
        Node n = new Node(x);
        n.next = top;
        top = n;
        System.out.println("New Node element push");
    }

    public int pop() {
        if (isEmpty()) {
            System.out.println("Empty");
            return -1;
        }
        int ele = top.data;
        top = top.next;
        return ele;
    }

    public int peek() {
        if (!isEmpty()) {
            return top.data;
        } else {
            return -1;
        }
    }

    public boolean isEmpty() {
        if (top == null) {
            return false;
        }
        return true;
    }

    public void display() {
        if (isEmpty()) {
            System.out.println("no elements");
            return;
        }
        Node temp = null;
        while (temp != null) {
            System.out.println(temp.data);
            temp = temp.next;
        }
    }
}

public class QueueLinkedList {
    public static void main(String[] args) {

    }
}
