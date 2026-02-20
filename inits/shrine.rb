require "shrine"
require "shrine/storage/file_system"

Shrine.storages = {
  cache: Shrine::Storage::FileSystem.new("images", prefix: "uploads/cache"), # temporary
  store: Shrine::Storage::FileSystem.new("images", prefix: "uploads"),       # permanent
}

Shrine.plugin(:cached_attachment_data) # enables retaining cached file across form redisplays
Shrine.plugin(:restore_cached_data)    # extracts metadata for assigned cached files
Shrine.plugin :rack_file # for non-Rails apps

ImageUploader.storages = Shrine.storages
