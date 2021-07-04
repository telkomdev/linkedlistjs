class Element {

    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }

    hasNext() {
        return this.next != null;
    }

    hasPrev() {
        return this.prev != null;
    }

    toString() {
        return `${this.value}`;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.current = null;
    }

    addFirst(element) {
        if (this.head == null) {
            this.tail = element;
        } else {
            this.head.prev = element;

            // place old value to the last
            element.next = this.head;
        }

        // place new value value to the first
        this.head = element;
    }

    addLast(element) {
        if (this.head == null) {
            this.head = element;
        } else {
            this.tail.next = element;

            // make prev from new element with prev tail
            element.prev = this.tail;
        }

        this.tail = element;
    }

    deleteFirst() {
        if (this.isEmpty()) {
            return null;
        }

        let temp = this.head;
        if (!this.head.hasNext()) {
            this.tail = null;
            this.head = null;
        } else {
            this.head.next.prev = null;
        }
        
        this.head = temp.next;

        return temp;
    }

    deleteLast() {
        if (this.isEmpty()) {
            return null;
        }

        let temp = this.tail;
        if (!this.tail.hasPrev()) {
            this.tail = null;
            this.head = null;
        } else {
            this.tail.prev.next = null;
        }

        this.tail = temp.prev;

        return temp;
    }

    isEmpty() {
        return this.head == null;
    }

    length() {
        if (this.isEmpty()) {
            return 0;
        }

        let ln = 1;
        let currentNode = this.head;
        while (currentNode.hasNext()) {
            currentNode = currentNode.next;
            ln++;
        }
        return ln;
    }

    *iterateForward() {
        if (this.isEmpty()) {
            throw 'list is empty';
        }

        // let currentNode = this.head;
        // yield currentNode;
        // while (currentNode.hasNext()) {
        //     currentNode = currentNode.next;
        //     yield currentNode;
        // }
        let currentNode = this.head
        for (; currentNode.hasNext(); currentNode = currentNode.next)
            yield currentNode;

        yield currentNode;
    }

    *iterateBackward() {
        if (this.isEmpty()) {
            throw 'list is empty';
        }

        // let currentNode = this.tail;
        // yield currentNode;
        // while(currentNode.hasPrev()) {
        //     currentNode = currentNode.prev;
        //     yield currentNode;
        // }

        let currentNode = this.tail
        for (; currentNode.hasPrev(); currentNode = currentNode.prev)
            yield currentNode;
        yield currentNode;
    }

    // this search method is suck, complexity = 0(n)
    search(e) {
        let currentNode = this.head;
        if (currentNode == null) {
            return null;
        }
        if (currentNode.value == e.value) {
            return currentNode;
        }
        
        while(currentNode.value != e.value) {
            if (!currentNode.next.hasNext()) {
                return null
            }

            currentNode = currentNode.next
        }

        return currentNode;
    }
}

module.exports = {
    Element, LinkedList
}