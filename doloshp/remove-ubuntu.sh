# ! / b i n / b a s h  
  
 #   C h e c k   t h a t   u s e r   i s   r o o t  
 i f   [   " $ E U I D "   - n e   0   ]  
   t h e n   e c h o   " P l e a s e   r u n   t h i s   s c r i p t   a s   r o o t "  
   e x i t  
 f i  
  
 #   s t o p   r u n n i n g   s e r v i c e s   t h a t   w i l l   i n t e r f e r e  
  
 s e r v i c e   p o s t g r e s q l   s t o p  
 s e r v i c e   a p a c h e 2   s t o p  
 s e r v i c e   p h p 5   s t o p  
  
 a p t - g e t   - q   - y   - - p u r g e   r e m o v e   p o s t g r e s q l \ *  
 a p t - g e t   - q   - y   - - p u r g e   r e m o v e   a p a c h e 2 \ *  
 a p t - g e t   - q   - y   - - p u r g e   r e m o v e   p h p  
  
 r m   / e t c / r s y s l o g . d / 0 0 - D O L O S . c o n f 