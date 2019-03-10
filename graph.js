import { createQueue } from './queue';

// A collection of nodes aka vertices
// Nodes may point to other nodes, known as edges

// key will be used to identify node
function createNode(key) {
	const neighbors = [];

	return {
		key,
		neighbors,
		addNeighbor(node) {
			neighbors.push(node);
		},
	};
}

// A directed graph's edges point in one particular direction
// from one node to another

// In an undirected graph we assume the symmetry of edges
// in order for 2 nodes to have symmetric edges
// the must both point to each other
// A Graph is a collection of nodes & edges
function createGraph(directed = false) {
	const nodes = [];
	const edges = [];

	return {
		directed,
		nodes,
		edges,

		addNode(key) {
			nodes.push(createNode(key));
		},

		getNode(key) {
			return nodes.find(node => node.key === key);
		},
		addEdge(node1Key, node2Key) {
			const node1 = this.getNode(node1Key);
			const node2 = this.getNode(node2Key);

			node1.addNeighbor(node2);
			edges.push(`${node1Key}${node2Key}`);

			if (!directed) {
				node2.addChild(node1);
			}
		},
		print() {
			return nodes
				.map(({ children, key }) => {
					let result = `${key}`;

					if (children.length) {
						result += ` => ${children.map(node => node.key).join(' ')}`;
					}

					return result;
				})
				.join('\n');
    },
    
    depthFirstSearch(startingNodeKey, visitFn) {
      const startingNode = this.getNode(startingNodeKey)
      const visited = nodes.reduce((acc, node) 
      => {
        acc[node.key] = false
        return acc
      }, {})
      function explore(node) {
        if (visited[node.key]) {
          return
        }
        visitFn(node) 
        visited[node.key] = true

        node.neighbors.forEach(node => {
          explore(node)
        })
      }
      explore(startingNode)
    },


		breadthFirstSearch(startingNodeKey, visitFn) {
			const startingNode = this.getNode(startingNodeKey);
			const visited = nodes.reduce((acc, node) => {
				acc[node.key] = false;
				return acc;
			}, {});
			const queue = createQueue();
			queue.enqueue(startingNode);

			while (!queue.isEmpty()) {
				const currentNode = queue.dequeue();
				if (!visited[currentNode.key]) {
					visitFn(currentNode);
					visited[currentNode.key] = true;
				}

				currentNode.neighbors.forEach(node => {
					if (!visited[node.key]) {
						queue.enqueue(node);
					}
				});
			}
		},
	};
}

const graph = createGraph(true);

graph.addNode('Kyle');
graph.addNode('Anna');
graph.addNode('Krios');
graph.addNode('Tali');
graph.addEdge('Kyle', 'Anna');
graph.addEdge('Anna', 'Kyle');
graph.addEdge('Kyle', 'Krios');
graph.addEdge('Kyle', 'Tali');
graph.addEdge('Anna', 'Krios');
graph.addEdge('Anna', 'Tali');
graph.addEdge('Krios', 'Anna');
graph.addEdge('Tali', 'Kyle');
console.log(graph.print());
