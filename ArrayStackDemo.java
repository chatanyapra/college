class Stack {
    public int[] arr = new int[5];
    int top;
    int store;

    public Stack(int size) {
        arr = new int[size];
        top = -1;
        store = size - 1;
    }

    public void push(int x) {
        if (top == store) {
            System.out.println("Storage full");
            return;
        }
        arr[++top] = x;
        System.out.println("Element added");
    }

    public int peek() {
        if (isEmpty()) {
            System.out.println("Empty");
            return -1;
        } else {
            return arr[top];
        }
    }

    public int pop() {
        if (isEmpty()) {
            return -1;
        }
        return arr[top--];
    }

    public boolean isEmpty() {
        if (top == -1) {
            return true;
        }
        return false;
    }
}

public class ArrayStackDemo {
    public static void main(String[] args) {

    }
}
