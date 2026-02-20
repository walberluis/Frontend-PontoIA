const ConfigCard = ({ title, count, showAvatars = false, onEdit, onDelete, onAdd }) => {
  const avatars = ['https://i.pravatar.cc/40?img=1', 'https://i.pravatar.cc/40?img=2', 'https://i.pravatar.cc/40?img=3'];

  return (
    <div className="bg-white border-2 border-gray-200 rounded-2xl p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-gray-800">{title}</h3>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-600">{count} Alunos</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onEdit}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Edit2 className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={onDelete}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Trash2 className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-2xl text-gray-400">+</span>
          {showAvatars ? (
            <div className="flex -space-x-2">
              {avatars.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt="Avatar"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              ))}
            </div>
          ) : (
            <div className="flex -space-x-2">
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full bg-black border-2 border-white"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};s
