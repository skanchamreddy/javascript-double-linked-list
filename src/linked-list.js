const Node = require('./node');


class LinkedList {
    constructor() {
        this.length=0;
        //this.node;
        this._tail;
        this._head;
    }

    append(data) {
        var nodeNew = new Node(data);
        if(this.length == 0){
            //this.node= nodeNew;
            //this.node.next= nodeNew;
            //this.node.prev= nodeNew;
            this._head=nodeNew;
            this._tail=nodeNew;
        }else{
            this._tail.next=nodeNew;
            nodeNew.prev=this._tail;
            this._tail=nodeNew;
        }
        this.length+=1;
        return this;
    }

    head() {
        if(this._head!= null)
        return  this._head.data;
        else
        return null;
    }

    tail() {
        if (this._tail!=null)
        return  this._tail.data;
        else
        return null;
    }

    at(index) {

        var current=this._head;
        var possion=0;
        while(possion<index){
            current=current.next;
            possion= possion+1;          
        }
        return current.data;
    }

    insertAt(index, data) {
        if(index==0){
        this.append(data);
        return this;
        }
        var newNode = new Node(data);
        var current=this._head;
        var possion=0;
       
        while(possion<index){
            current=current.next;
            possion= possion+1;          
        }
        newNode.next=current;
        newNode.prev=current.prev;
        newNode.prev.next= newNode;
        current.prev =newNode;
        this.length+=1;

       if(index==this.length)
        this._tail=newNode;
        
        return this;
    }

    isEmpty() {

        if(this.length==0)
        return true;
        else
        return false;
    }

    clear() {
        this.length=0;      
        this._head=null;
        this._tail=null;
        return this;
    }

    deleteAt(index) {
       
   
        var currentNode=this._head;       
        var possion=0;
       
        while(possion<index){            
            currentNode=currentNode.next;           
            possion= possion+1;          
        }
        if(this.length==1 && index==0)
        {
            this.clear()
            return this;
        }
        if( currentNode.prev != null){
        currentNode.prev.next=currentNode.next;
        }
        if( currentNode.next != null){
        currentNode.next.prev=currentNode.prev;
        }
        possion-=1;
        return this;
    }

    reverse() {
        this._tail=this._head;
        while(this._head !=null){
            var temp= this._head.prev;
            this._head.prev=this._head.next;
            this._head.next= temp;
            if(this._head.prev!=null){
                this._head=this._head.prev;                
            }
            else
            break;
        }        
        return this;
    }

    indexOf(data) {      
         var currentNode = this._head;
         var possion=0;
        var flag=false;
         while(possion <this.length)
         {            
            if(currentNode.data==data){
                flag=true;
                break;
            }
            currentNode= currentNode.next;
            possion+=1;
         }
         if(flag==false){
             return -1;
         }
         return possion;
    }
}
module.exports = LinkedList;
