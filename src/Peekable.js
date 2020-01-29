class Peekable {
  constructor(iterator) {
    this._iterator = iterator
    this._peekedItem = undefined
    this._peeked = false
  }

  [Symbol.iterator]() {
    return this
  }

  next() {
    let next = this._peeked ? this._peekedItem : this.iterator.next()

    this._peekedItem = undefined
    this._peeked = false

    return next
  }

  peek() {
    if (!this._peeked) {
      this._peekedItem = this.iterator.next()
      this._peeked = true
    }

    return this._peekedItem
  }
}

module.exports = Peekable
