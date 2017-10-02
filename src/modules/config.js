const defaultConfig = () => {
  return {
    url:            'https://api.shootproof.com/v2',
    getEvents:      'sp.event.get_list',
    getGallery:     'sp.event.get_photos', 
    getPhoto:       'sp.photo.info'
  }
}

export default defaultConfig()
