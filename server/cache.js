const path = require('path');
const assert = require('assert');
const fs = require('fs');
const _getRelativePath = Symbol('getRelativePath')
const FileStore = require('think-store-file')
const md5 = require('md5')

const defaultOptions = {
  timeout: 24 * 3600 * 1000,
  cachePath: '',
  pathDepth: 1,
  gcInterval: 24 * 3600 * 1000
};

/**
 * file cache adapter
 */
class FileCache {
  constructor(config) {
    config = {
      ...defaultOptions,
      ...config
    }
    this.timeout = config.timeout;
    this.cachePath = config.cachePath;
    this.pathDepth = config.pathDepth;
    this.store = new FileStore(this.cachePath);
  }

  /**
   * get file path by the cache key
   * @param  {String} key [description]
   * @return {String}     [description]
   */
  [_getRelativePath](key) {
    key = md5(key);
    const dir = key.slice(0, this.pathDepth).split('').join(path.sep);
    return path.join(dir, key);
  }

  /**
   * get cache by the cache key
   * @param  {String} key [description]
   * @return {Promise}      [description]
   */
  get(key) {
    const relativePath = this[_getRelativePath](key);
    return this.store.get(relativePath).then(content => {
      if (!content) {
        return;
      }
      try {
        content = JSON.parse(content);
        if (Date.now() > content.expire) {
          return this.store.delete(relativePath);
        } else {
          return content.content;
        }
      } catch (e) {
        return this.store.delete(relativePath);
      }
    });
  }

  /**
   * set cache
   * @param {String} key     [description]
   * @param {String} content [description]
   * @param {Number} timeout [millisecond]
   * @return {Promise}      [description]
   */
  set(key, content, timeout = this.timeout) {
    const relativePath = this[_getRelativePath](key);
    const tmp = {
      content: content,
      expire: Date.now() + timeout
    };
    return this.store.set(relativePath, JSON.stringify(tmp));
  }

  /**
   * delete cache by the cache key
   * @param  {String} key [description]
   * @return {Promise}     [description]
   */
  delete(key) {
    const relativePath = this[_getRelativePath](key);
    return this.store.delete(relativePath);
  }
}

module.exports = FileCache;