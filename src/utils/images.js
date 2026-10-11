const modules = import.meta.glob('../assets/images/*.{png,jpg,jpeg,svg,webp,jfif}', {
  eager: true,
  import: 'default',
})
 
export const images = Object.fromEntries(
  Object.entries(modules).map(([path, url]) => {
    const name = path.split('/').pop().split('.')[0]
    return [name, url]
  })
)
 
 