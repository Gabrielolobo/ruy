# Prefix tree algorithm

class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False


class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end_of_word = True

    def search_prefix(self, prefix):
        node = self.root
        for char in prefix:
            if char not in node.children:
                return []
            node = node.children[char]
        return self._collect_words(node, prefix)

    def _collect_words(self, node, prefix):
        result = []
        if node.is_end_of_word:
            result.append(prefix)
        for char, child_node in node.children.items():
            result.extend(self._collect_words(child_node, prefix + char))
        return result
