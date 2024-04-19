
FROM quay.io/cipher/alpha
RUN git clone https://github.com/Ndelevamutua/NDELEVA-MD/ /Ndeleva
WORKDIR /Ndeleva/
RUN npm install
EXPOSE 3067
CMD ["npm", "start"]
