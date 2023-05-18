export class Queue {
  private FRONT_POINTER: number = -1;
  private REAR_POINTER: number = -1;
  private queue: number[] = [];
  private MAXIMUM_SIZE_OF_QUEUE = 10;
  private isQueueEmpty(): boolean {
    if (this.queue.length == 0) {
      return true;
    }
    return false;
  }
  private isQueueFull(): boolean {
    if (this.REAR_POINTER - 1 === this.MAXIMUM_SIZE_OF_QUEUE) {
      return true;
    }
    return false;
  }
  enqueue(element: number): boolean {
    if (this.isQueueEmpty()) {
      this.FRONT_POINTER = 0;
      this.REAR_POINTER += 1;
      this.queue[this.REAR_POINTER] = element;
      console.log("The updated queue", this.queue);

      return true;
    } else if (!this.isQueueEmpty() && !this.isQueueFull()) {
      this.REAR_POINTER += 1;
      this.queue[this.REAR_POINTER] = element;
      return true;
    } else if (this.isQueueFull()) {
      console.log("Can not insert element!!!!");
    }

    //the queue is empty
    //the queue is empty and not full
    //the queue is full
    //if the operation fails
    return false;
  }
}
