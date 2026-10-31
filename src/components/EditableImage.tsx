import React, { useState, useRef } from 'react';
import { useImageContext } from '../context/ImageContext.tsx';
import { Camera, Upload, Trash2, X, Check, Image as ImageIcon, Link as LinkIcon } from 'lucide-react';

interface EditableImageProps {
  imageKey: string;
  altText: string;
  className?: string;
  aspectRatio?: string;
  defaultVisual: React.ReactNode;
  titleHint?: string;
}

export const EditableImage: React.FC<EditableImageProps> = ({
  imageKey,
  altText,
  className = '',
  aspectRatio = 'aspect-[4/3]',
  defaultVisual,
  titleHint = 'ಭಾವಚಿತ್ರ',
}) => {
  const { images, updateImage, resetImage } = useImageContext();
  const currentUrl = images[imageKey];

  const [modalOpen, setModalOpen] = useState(false);
  const [urlInput, setUrlInput] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleOpenFilePicker = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 8 * 1024 * 1024) {
        alert('ದಯವಿಟ್ಟು 8MB ಗಿಂತ ಕಡಿಮೆ ಗಾತ್ರದ ಚಿತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ.');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setPreviewUrl(reader.result);
          setUrlInput('');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const finalUrl = previewUrl || urlInput.trim();
    if (finalUrl) {
      updateImage(imageKey, finalUrl);
    }
    setModalOpen(false);
    setPreviewUrl(null);
    setUrlInput('');
  };

  const handleReset = () => {
    resetImage(imageKey);
    setPreviewUrl(null);
    setUrlInput('');
    setModalOpen(false);
  };

  return (
    <>
      <div className={`relative group overflow-hidden rounded-2xl border border-emerald-100 shadow-sm bg-emerald-50/40 ${aspectRatio} ${className}`}>
        {/* Render uploaded image if present, else default visual */}
        {currentUrl ? (
          <img
            src={currentUrl}
            alt={altText}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full">{defaultVisual}</div>
        )}

        {/* Floating Upload / Change Button */}
        <button
          type="button"
          onClick={() => {
            setPreviewUrl(currentUrl || null);
            setUrlInput(currentUrl && !currentUrl.startsWith('data:') ? currentUrl : '');
            setModalOpen(true);
          }}
          className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 hover:bg-emerald-600 text-slate-700 hover:text-white text-xs font-semibold shadow-md border border-slate-200 hover:border-emerald-600 transition-all duration-200 backdrop-blur-sm group-hover:scale-105 active:scale-95"
          title={`${titleHint} - ಚಿತ್ರ ಬದಲಾಯಿಸಿ`}
          aria-label={`${titleHint} - ಚಿತ್ರ ಬದಲಾಯಿಸಿ`}
        >
          <Camera className="w-3.5 h-3.5" />
          <span>ಚಿತ್ರ ಬದಲಾಯಿಸಿ</span>
        </button>

        {currentUrl && (
          <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-emerald-800/80 text-white text-[10px] font-medium backdrop-blur-sm">
            ಬಳಕೆದಾರರ ಚಿತ್ರ
          </div>
        )}
      </div>

      {/* Upload & Edit Modal (in Kannada) */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl border border-slate-200 space-y-5 text-slate-800">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <ImageIcon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {titleHint} : ಹೊಸ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ
                  </h3>
                  <p className="text-xs text-slate-500">
                    ನಿಮ್ಮ ಸಾಧನದಿಂದ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ಅಥವಾ URL ನಮೂದಿಸಿ
                  </p>
                </div>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Preview Box */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700">ಮುನ್ನೋಟ (Preview):</label>
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center">
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : urlInput ? (
                  <img
                    src={urlInput}
                    alt="URL Preview"
                    onError={() => {}}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center p-4 text-slate-400 space-y-1">
                    <ImageIcon className="w-10 h-10 mx-auto text-slate-300" />
                    <p className="text-xs">ಇನ್ನೂ ಯಾವುದೇ ಹೊಸ ಚಿತ್ರ ಆಯ್ಕೆ ಮಾಡಿಲ್ಲ</p>
                  </div>
                )}
              </div>
            </div>

            {/* Upload Option 1: File from Computer / Mobile */}
            <div className="space-y-2">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <button
                type="button"
                onClick={handleOpenFilePicker}
                className="w-full py-3 px-4 rounded-xl border-2 border-dashed border-emerald-300 hover:border-emerald-500 bg-emerald-50/50 hover:bg-emerald-50 text-emerald-800 text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Upload className="w-4 h-4 text-emerald-600" />
                <span>ಸಾಧನದಿಂದ ಫೋಟೋ ಆರಿಸಿ (Upload from Device)</span>
              </button>
            </div>

            {/* Upload Option 2: Image Web URL */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <LinkIcon className="w-3.5 h-3.5 text-slate-400" />
                <span>ಅಥವಾ ಚಿತ್ರದ ವೆಬ್ ಲಿಂಕ್ (Image URL):</span>
              </label>
              <input
                type="url"
                value={urlInput}
                onChange={(e) => {
                  setUrlInput(e.target.value);
                  setPreviewUrl(null);
                }}
                placeholder="https://example.com/photo.jpg"
                className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900"
              />
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>ಮೂಲ ಚಿತ್ರಕ್ಕೆ ಮರುಹೊಂದಿಸಿ (Reset)</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  ರದ್ದುಮಾಡಿ (Cancel)
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow transition-colors"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>ಉಳಿಸಿ (Save Photo)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
