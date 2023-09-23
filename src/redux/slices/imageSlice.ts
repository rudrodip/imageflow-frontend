import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

type ImageState = {
  image: File | null;
  url: string | null;
  loading: boolean;
  error: string | null;
  videoUrl: string | null;
};

const initialState: ImageState = {
  image: null,
  url: null,
  loading: false,
  error: null,
  videoUrl: null,
};

export const imageToVideo = createAsyncThunk(
  'imageToVideo',
  async ({ imageUrl }: { imageUrl: string }) => {
    try {
      const response = await fetch('/api/img-to-video', {
        method: "POST",
        body: JSON.stringify({ imageUrl: imageUrl })
      });
      const res = await response.json()
      return res
    } catch (error) {
      console.error('Error during fake API call:', error);
      throw error;
    }
  }
);

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setUploadedImage: (state, action: PayloadAction<File>) => {
      state.url = URL.createObjectURL(action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    clearUploadedImage: (state) => {
      state.image = null;
      state.url = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(imageToVideo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(imageToVideo.fulfilled, (state, action) => {
        state.loading = false;
        state.videoUrl = action.payload; // Set the video URL
        state.error = null;
      })
      .addCase(imageToVideo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || ''; // Set the error message
      });
  },
});

export const { setUploadedImage, clearUploadedImage } = imageSlice.actions;

export default imageSlice.reducer;
