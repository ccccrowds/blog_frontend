import Cache from './cache'

const hash = (args) => {
  return args.length ? JSON.stringify(args) : 'cache'
}

/**
 * 相同输入下，返回相同的结果
 * 针对纯函数进行使用
 */
export const cached = (target, name, descriptor) => {
  const cache = new Cache()

  const func = descriptor.value

  descriptor.value = function (...args) {
    const key = hash(args)

    if (cache.has(key)) return cache.get(key)

    const result = func.apply(this, args)

    cache.set(key, result)

    return result
  }
}