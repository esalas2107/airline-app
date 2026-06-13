class GraphNode<T> {
    public _id: string;
    public _data: T;
    public _neighbors: GraphNode<T> [];

    constructor(id: string, data: T) {
        this._id = id;
        this._data = data;
        this._neighbors = []
    }
}

class AirportGraph<T> {
    private nodes: Map<string, GraphNode<T>>;

    constructor() {
        this.nodes = new Map();
    }

    addNode(id: string, data: T): void {
        this.nodes.set(id, new GraphNode(id, data));
    }

    getNode(id: string): GraphNode<T> | undefined {
        return this.nodes.get(id);
    }

    addEdge(fromId: string, toId: string): void {
        const fromNode = this.getNode(fromId);
        const toNode = this.getNode(toId);

        if(fromNode && toNode) {
            fromNode._neighbors.push(toNode);
        }
    }
}